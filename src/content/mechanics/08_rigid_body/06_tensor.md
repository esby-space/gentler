---
title: "Rigid Body Rotation and the Tensor of Inertia"
chapter: 8
section: 6
---

# Rigid Body Rotation and the Tensor of Inertia

## Angular Momentum and the Tensor of Inertia

In example 8.1, we analyzed the angular momentum of a rotating skew rod, but we found that the angular velocity and angular momentum weren't point in the same direction. Therefore, the equation $\vec{L} = I_0 \vec{\omega}$ from chapter 7 when describing fixed axis rotation no longer works ;-;

Let's start with the definition of angular momentum and go from there:

$$
\begin{align*}
    \vec{L} &= \int_M \vec{r} \times \vec{p} \,dm \\
    \vec{L} &= \int_M \vec{r} \times m \vec{v} \,dm \\
    \vec{L} &= \int_M \vec{r} \times m (\vec{\omega} \times \vec{r}) \,dm
\end{align*}
$$

You may fear the double cross product. I fear the double cross product. Let's use a cross product identity:

$$
\vec{A} \times (\vec{B} \times \vec{C}) = (\vec{A} \cdot \vec{C}) \vec{B} - (\vec{A} \cdot \vec{B}) \vec{C}
$$

blah blah blah blah blah

$$
\begin{align*}
    \begin{pmatrix}
        L_x \\
        L_y \\
        L_z
    \end{pmatrix} &=
    \begin{pmatrix}
        \int_M y^2 + z^2 \,dm & -\int_M xy \,dm & -\int_M xz \,dm \\
        -\int_M xy \,dm & \int_M x^2 + z^2 \,dm & -\int_M yz \,dm \\
        -\int_M xz \,dm & -\int_M yz \,dm & \int_M x^2 + y^2 \,dm
    \end{pmatrix}
    \begin{pmatrix}
        \omega_x \\
        \omega_y \\
        \omega_z
    \end{pmatrix} \\
    \vec{L} &= \tilde{I} \vec{\omega}
\end{align*}
$$

And the inertia tensor said softly, _"I am your worst nightmare."_

## Principal Axes

In every rotation, you can chose your axes so the inertia tensor simplifies to

$$
\tilde{I} =
\begin{pmatrix}
    I_{xx} & 0 & 0 \\
    0 & I_{yy} & 0 \\
    0 & 0 & I_{zz}
\end{pmatrix}
$$

Which is a lot better! If we label these principal axes 1, 2, and 3, then we can calculate our angular momentum in a simpler way:

$$
\begin{align*}
    L_1 &= I_1 \omega_1 \\
    L_2 &= I_2 \omega_2 \\
    L_3 &= I_3 \omega_3
\end{align*}
$$

## Rotational Kinetic Energy of a Rigid Body

