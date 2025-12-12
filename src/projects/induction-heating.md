---
title: Induction Heating Device for Automated Soldering — EOSPACE
date: 09/12/24
summary: A compact 100 kHz induction heating system designed to automate the soldering of stainless-steel tubes, replacing a manual soldering-iron process and significantly speeding up manufacturing for EOSPACE.
tags: electrical engineering, power electronics, embedded systems, hardware design
---

## Overview

I designed and manufactured a compact induction-heating system for EOSPACE to automate the process of soldering stainless-steel tubes. Their previous workflow relied on a handheld soldering iron, which was slow, inconsistent, and required continuous operator attention. The goal of this project was to create a reliable, repeatable, and efficient heating solution tailored to their production needs.

---

## System Design

### Heating Method

To heat the stainless-steel tube, I used **induction heating**, targeting a resonant frequency of **100 kHz**, calculated to be optimal for efficient coupling with stainless steel. The coil, custom ferrite geometry, and capacitor bank were tuned to ensure stable resonance at this frequency.

### Power Electronics

- **Off-the-shelf DC oscillator** used as the primary power stage
- **Custom capacitor bank** designed to match the inductance of the heating coil
- **Custom-cut ferrite** to focus magnetic flux and increase heating efficiency
- System optimized to handle high currents and power density despite the compact form factor

### Temperature Control

To achieve consistent solder melt profiles without operator intervention:

- Used an **RTD sensor** for accurate temperature feedback
- Implemented a **bang-bang (on–off) control loop** on an Arduino
- Designed the controller to follow a temperature-vs-time curve required for the solder ring to melt cleanly and uniformly

This allowed the system to operate autonomously with minimal user input.

---

## Engineering Challenges

- **High Current Management:**  
  Designing busbars, traces, and thermal paths capable of safely carrying the required current in a compact layout.

- **Thermal and Magnetic Optimization:**  
  Tuning resonance and ferrite geometry to achieve stable heating at 100 kHz.

- **System Miniaturization:**  
  Fitting the power electronics, capacitor network, coil, sensor, and control circuitry into a small enclosure.

---

## Impact

The final device:

- Reduced soldering time per part
- Increased consistency across production
- Required far less operator intervention
- Improved overall throughput for EOSPACE’s manufacturing line

---

## Key Takeaways

This project strengthened my experience in:

- Power electronics and inductive heating design
- Embedded control for thermal systems
- Practical resonance tuning and ferrite selection
- Designing with the end user and production workflow in mind
- Improving documentation practices for manufacturability and serviceability

---
