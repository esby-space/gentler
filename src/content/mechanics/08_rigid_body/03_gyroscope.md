---
title: "The Gyroscope"
chapter: 8
section: 3
---

# The Gyroscope

First, we look at the change of angular momentum at the wheel with respect to time. This is equal to the total amount of torque in the system.

$$
\begin{align*}
    \frac{d\vec{L_s}}{dt} &= \vec{\Omega} \times \vec{L_s} \\
    \tau &= \Omega L_s
\end{align*}
$$

Next, we analyze the torque by looking at the Free Body Diagram. The weight of the wheel is the only force that contributes to the torque.

$$
\begin{align*}
    \vec{\tau} &= \vec{l} \times M \vec{g} + \cancel{\vec{0} \times \vec{N}} \\
    \tau &= M l g
\end{align*}
$$

Comparing these two equations gets us an equation for the angular velocity of the procession.

$$
\begin{align*}
    \Omega L_s &= M l g \\
    \Omega &= \frac{M l g}{L_s} \\
    \Omega &= \frac{M l g}{I_0 \omega_s} \tag{8.2}
\end{align*}
$$

