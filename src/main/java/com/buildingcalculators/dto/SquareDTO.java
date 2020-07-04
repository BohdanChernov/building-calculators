package com.buildingcalculators.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SquareDTO {
    private double width;
    private Units widthUnits;
    private double length;
    private Units lengthUnits;
    private Units resultUnits;
}
