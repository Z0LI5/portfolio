---
title: "Multi-IMU Precision Motion Sensor Board"
date: "2025-11-13"
summary: "Compact 40mm×40mm sensor fusion board with 8 LSM6DSVTR IMUs, high-speed SPI multiplexing, and CAN bus communication for precision motion tracking."
tags: "electrical engineering, pcb design, hardware, embedded systems"
---

## Overview

As part of Advanced Robotics at the University of Washington, I designed a high-precision IMU board to improve our robot’s motion-tracking accuracy. The goal was to integrate multiple IMUs on a small form factor and fuse their data for more reliable orientation and motion measurements during competition.

## Simulation

Before designing the hardware, I ran Python simulations using an **8-IMU noise model** based on Farrenkompf sensor characteristics. Each IMU was given a different noise profile to reflect real-world variability. Averaging the signals significantly reduced noise and tracked the ideal waveform closely.

![Image1](/projects/IMUBoard_Simulation.png)  
![Image2](/projects/IMUBoard_Simulation_2.png)

## System Architecture

- **Sensor Array:** Four LSM6DSVTR IMUs placed to maximize spatial separation
- **Data Fusion:** High-speed sampling and averaging across all IMUs
- **Communication:** CAN interface using a CAN transceiver
- **Thermal Control:** Resistor-based heating elements below each IMU, switched via relay

## Hardware Design

### Microcontroller

**STM32F042F4P6 (TSSOP20)**

- Chosen for its small footprint and high-speed SPI support
- SPI used instead of I2C to take advantage of **80 MHz bandwidth**, improving sampling rates
- Enough available GPIO pins allowed direct chip-select control without needing a multiplexer
- A 3:8 decoder (MC74HC138ADR2G) reduces switching latency and simplifies routing

### Power System

- **24V → 5V Buck Converter (AP63201QWU-7):** High efficiency and a naturally slower transient response, which helps smooth out any unexpected input changes
- **5V → 3.3V LDO (MIC5504-3.3YM5-TR):** Selected to comfortably supply the MCU and digital logic
- **5V → 1.8V LDO (MIC5365-1.8YC5-TR):** Supports low-current IMU array
- **24V Line:** Directly drives the custom heating elements

### Heating Control

- Controlled through a relay (VO1400AEFTR) for simplicity and reliability
- Future revision will move to a MOSFET + gate driver for reduced cost and faster switching

### Physical Specs

- 25mm × 35mm form factor
- M3 mounting holes (23mm × 33mm spacing)
- Operating range: −40°C to 85°C

## Technical Challenges

- **SPI Timing:** Only one IMU can be active at a time, so the firmware is optimized for very fast sequential polling
- **Thermal Variation:** Localized heating maintains consistent sensor temperature and reduces measurement drift
- **Noise Reduction:** Multi-IMU averaging provides significantly cleaner signals compared to a single-IMU setup

## Final Board Design

<model-viewer
    src="/projects/imu-board.glb"
    alt="3D model of IMU sensor board"
    auto-rotate
    camera-controls
    shadow-intensity="1"
    exposure="1"
    camera-orbit="45deg 75deg 2.5m"
    min-camera-orbit="auto auto 30m"
    max-camera-orbit="auto auto 100m"
    ar
    ar-modes="webxr scene-viewer quick-look"
    environment-image="neutral"
    style="width: 100%; height: 600px; background-color: #f7f6f3; border-radius: 0.5rem; border: 1px solid #e9e9e7;" >

  <!-- Loading indicator -->
  <div slot="progress-bar" style="height: 4px; background: #2383e2; width: 100%;"></div>
</model-viewer>
