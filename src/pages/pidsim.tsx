import Header from "../components/header"
import { useEffect, useState, useRef } from "react";

import './pidsim.css'
import displayNum from "../functions/displayNum";


function PIDsim() {
    const [runId, setRunId] = useState(0);
    const [running, setRunning] = useState(false);
    const [targetPos, setTargetPos] = useState(50);
    const [mass, setMass] = useState(5);
    const [c, setC] = useState(0);
    const [kP, setkP] = useState(0.0);
    const [kI, setkI] = useState(0.0);
    const [kD, setkD] = useState(0.0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    function targetPosSliderValue(event: React.ChangeEvent<HTMLInputElement>) {
        setTargetPos(Number(event.target.value));
    }
    function massSliderValue(event: React.ChangeEvent<HTMLInputElement>) {
        setMass(Number(event.target.value));
    }
    function cSliderValue(event: React.ChangeEvent<HTMLInputElement>) {
        setC(Number(event.target.value));
    }
    function kPSliderValue(event: React.ChangeEvent<HTMLInputElement>) {
        setkP(Number(event.target.value));
    }
    function kISliderValue(event: React.ChangeEvent<HTMLInputElement>) {
        setkI(Number(event.target.value));
    }
    function kDSliderValue(event: React.ChangeEvent<HTMLInputElement>) {
        setkD(Number(event.target.value));
    }

    const inputs = useRef({ targetPos, mass, c, kP, kI, kD, running });

    useEffect(() => {
        inputs.current = { targetPos, mass, c, kP, kI, kD, running };
    });

    useEffect(() => {

        let x: number = 0
        let v: number = 0
        let prevV: number = v
        let error: number = inputs.current.targetPos - x;
        let prevError: number = error;
        let frame: number = 0;
        let derivative = 0;
        let integral = 0;
        let elapsed = 0;
        let last = performance.now();
        let count = 0;
        let power = 0;
        let timetomove = 0;
        let settled = false;
        let settleCount = 0;
        let prevTarget = inputs.current.targetPos - x;

        const step = (timestamp: number) => {
            const { targetPos, mass, c, kP, kI, kD, running } = inputs.current;
            const dt = (timestamp - last) / 1000
            last = timestamp;
            const clamp = (num: number, min: number, max: number) =>
                Math.min(Math.max(num, min), max);
            if (running) {

                elapsed += dt;

                error = targetPos - x;
                integral += error * dt / 50;
                const INTEGRAL_MAX = 1
                integral = clamp(integral, -INTEGRAL_MAX, INTEGRAL_MAX);
                derivative = (error - prevError) / dt;

                if (Math.sign(prevError) !== Math.sign(error)) {
                    integral = 0;
                }

                if (count % 1 == 0) {
                    power = kP * 2 * error + kD * derivative + kI * integral;
                }

                const maxAccel = 80 * ((5 / mass));
                const deAccel = 100 * ((5 / mass));

                const maxSpeed = (60 * (5 / mass))

                const speedingUp = Math.abs(power) > Math.abs(v)
                    && (v === 0 || Math.sign(power) === Math.sign(v));

                const maxDelta = (speedingUp ? maxAccel : deAccel) * dt;

                v += clamp(power - v, -maxDelta, maxDelta);
                const s = Math.sign(v)
                v -= c / 5 * Math.sign(v)
                if (Math.sign(v) != s) {
                    v = 0;
                }

                v = clamp(v, -maxSpeed, maxSpeed);

                if (settled) {
                    if (prevTarget !== inputs.current.targetPos) {
                        if (settled) {
                            timetomove = 0;
                        }
                        settled = false;
                    }
                } else {
                    if (Math.abs(v) < 2 && Math.abs(error) < 1) {
                        settleCount++;
                    } else {
                        settleCount = 0;
                    }
                    if (settleCount > 5) {
                        settled = true;
                    }
                }


                if (!settled) {
                    timetomove += dt;
                }

                x += v * dt;

                console.log(`x = ${displayNum(x)}`);
                console.log(`v = ${displayNum(v)}`);
                console.log(`error = ${displayNum(error)}`);
                console.log(`derivative = ${displayNum(derivative)}`);
                console.log(`integral = ${displayNum(integral)}`);
                count += 1;
                prevError = error;
                prevTarget = inputs.current.targetPos;
            }
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgb(220, 208, 255)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (Math.abs(v) >= Math.abs(prevV) && Math.sign(v) === Math.sign(prevV)) {
                ctx.fillStyle = "rgb(11, 69, 44)";
            } else {
                ctx.fillStyle = "rgb(123, 9, 9)";
            }
            ctx.fillStyle = "rgb(87, 47, 109)";
            ctx.fillRect(8 * x + 50, 200, 40, 40);
            ctx.fillStyle = "rgb(157, 103, 186)";
            ctx.fillRect(50 + 8 * targetPos, 240, 40, 10);
            ctx.font = "50px 'Jersey 10'";
            ctx.fillText(`x = ${Math.round(x * 100) / 100}`, 160, 40);
            ctx.fillText(`settle time: ${Math.round(timetomove * (100)) / 100}`, canvas.width / 2 - 100, 40);
            ctx.fillText(`t = ${Math.round(elapsed * (100)) / 100}`, canvas.width - 200, 40);
            prevV = v;
            frame = requestAnimationFrame(step);
        }

        frame = requestAnimationFrame(step);
        return () => {
            if (frame) {
                cancelAnimationFrame(frame);
            }
        };

    }, [runId]);


    return (
        <>

            <Header title="simulator" />
            <div className='pidsim-container'>
                <div className="pidsim-top-area">
                    <button className="pidsim-pause-start-button" onClick={() => setRunning(r => !r)}>
                        {running ? "Pause" : "Start"}
                    </button>
                    <button className="pidsim-reset-button" onClick={() => {
                        setRunId(n => n + 1);
                        setRunning(false);
                    }}>
                        Reset
                    </button>
                    <div className="settings-slider-container">
                        <label>
                            <div className="pidsim-target-pos-text">
                                Target Position: {targetPos}"
                            </div>
                            <input type="range" className="pidsim-target-pos-slider" min="10" max="100" onChange={targetPosSliderValue} value={targetPos} />
                        </label>
                        <label>
                            <div className="pidsim-mass-slider-text">
                                Mass (kg): {mass} kg ({Math.round(22 * mass) / 10}lb)
                            </div>
                            <input type="range" className="pidsim-mass-slider" min="2" max="10" step="0.1" onChange={massSliderValue} value={mass} />
                        </label>
                        <label>
                            <div className="pidsim-c-slider-text">
                                friction + drag constant: {c}
                            </div>
                            <input type="range" className="pidsim-c-slider" min="0" max="1" step="0.01" onChange={cSliderValue} value={c} />
                        </label>
                    </div>
                </div>
                <canvas ref={canvasRef} width={900} height={350} className="pidsim-display" />

                <div className='constants'>
                    <label>
                        <div className="pidsim-kP-slider-text">
                            kP: {kP}
                        </div>
                        <input type="range" className="pidsim-kP-slider" min="0.00" max="5.00" step="0.05" onChange={kPSliderValue} value={kP} />
                    </label>
                    <label>
                        <div className="pidsim-kI-slider-text">
                            kI: {kI}
                        </div>
                        <input type="range" className="pidsim-kI-slider" min="0.00" max="5.00" step="0.05" onChange={kISliderValue} value={kI} />
                    </label>

                    <label>
                        <div className="pidsim-kD-slider-text">
                            kD: {kD}
                        </div>
                        <input type="range" className="pidsim-kD-slider" min="0.00" max="5.00" step="0.05" onChange={kDSliderValue} value={kD} />
                    </label>
                </div>

            </div >
        </>
    );

}

export default PIDsim;