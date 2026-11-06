# Reaction-wheel stabilizer — supplementary engineering notes

Prepared for this portfolio. These are explanatory notes and a proposed validation plan, reference design documentation.

## Mechanical model
For a single controlled axis, wheel acceleration produces an opposing reaction torque on the body: tau_body = -I_w * alpha_w. This describes the wheel contribution; gravity, friction, body inertia, and coupling must also be accounted for in a complete model. Wheel speed limits mean correction authority is finite.

## Illustrative controller
Define tilt relative to upright and measure angular rate in rad/s. A PD law can combine tilt error and rate damping. Motor-command polarity depends on mounting and driver wiring and must be checked. PWM is not automatically a calibrated torque command. The reference sketch leaves gains at zero and hardware adapters unimplemented.

## Proposed validation sequence
1. Record actual board, IMU, motor, driver, power supply, dimensions, and wheel mass.
2. Check mechanical retention, free rotation, balance, wiring, and current limits.
3. Calibrate sensor bias and verify orientation while motor output is disabled.
4. Verify motor direction and reaction sign using a supported fixture.
5. Verify the shutdown behavior and sensor timeout before enabling closed-loop control.
6. Tune and log bounded tests; record sample interval and any dropped samples.
7. Record body angle, angular rate, command, current, and wheel speed if available.
8. Repeat tests at documented initial angles. Report settling criterion, overshoot, saturation, and repeatability.

## Engineering records
Useful engineering records include controller firmware, component specifications, inertia estimates, calibration records, time-series logs, and a video of a documented test.
