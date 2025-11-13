---
title: "Multi-IMU Precision Motion Sensor Board"
date: "2025-11-13"
summary: "Compact 40mm×40mm sensor fusion board with 8 LSM6DSVTR IMUs, high-speed SPI multiplexing, and CAN bus communication for precision motion tracking."
---

## Overview

For Advanced Robotics at the University of Washington, I was tasked to create a small CAN-enabled IMU board to measure the motion of the our robot. We wanted to use to up to **4 IMUs** to improve measurement precision.

## Simulation

To understand how multiple IMUs would the resulting measurement, I ran a simulation on python with 8 IMUs, each with a different amount of noise based on the Farrenkompf noise model. This will most accurately simulate what real IMUs data may look like.

![Image1](/projects/IMUBoard_Simulation.png)
![Image2](/projects/IMUBoard_Simulation_2.png)

The first image shows all the different IMUs and their respective signal (in this case it is a sine wave) and second image shows the average value of all 8 IMUs compared against a regular sine wave.

## System Architecture

- **Sensor Array**: 8× LSM6DSVTR IMUs positioned maximally distributed across the board
- **Data Fusion**: Averaging algorithm across all IMUs using high sampling rates (sine wave simulation with noise model)
- **Communication**: CAN bus interface (PA11/PA12) via MCP2562T-E/MF transceiver
- **Thermal Management**: Individual shunt resistors (RNCF0805DTE2K50) beneath each sensor, relay-controlled (VO1400AEFTR) for temperature stabilization

## Hardware Design

**MCU**: STM32F042F4P6 (TSSOP20)

- High-speed SPI multiplexing with 3:8 decoder (MC74HC138ADR2G)
- Software NSS chip selection (PA1-PA4) for sequential IMU polling
- Optimized for minimal switching latency across all sensors

**Power System**:

- Input: 24V → 5V buck converter (AP63201QWU-7, 1A)
- 5V → 3.3V LDO (MIC5504-3.3YM5-TR, ≤300mA) for MCU
- 5V → 1.8V LDO (MIC5365-1.8YC5-TR, ~8mA) for IMU array
- 24V direct feed for heating elements

**Physical Specs**:

- Form factor: 40mm × 40mm (Board Type C compliant)
- Mounting: M3 holes at 23mm × 33mm spacing
- Operating range: -40°C to 85°C

## Technical Challenges

- **SPI Bottleneck**: Sequential chip selection means only one IMU active at a time—compensated with high polling frequency
- **Thermal Distribution**: Localized heating via shunt resistors prevents gradient issues
- **RTS Noise**: Deferred for future iteration—current averaging approach sufficient for initial implementation

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
