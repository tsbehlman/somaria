// import { AngleBlock } from "./blocks/AngleBlock";
// import { ArcBlock } from "./blocks/ArcBlock";
import { ArithmeticBlock } from "./blocks/ArithmeticBlock";
import { BinarySwitchBlock } from "./blocks/BinarySwitchBlock";
// import { BoundsBlock } from "./blocks/BoundsBlock";
// import { CastTypeBlock } from "./blocks/CastTypeBlock";
import { ColorHexBlock } from "./blocks/ColorHexBlock";
// import { ColorHSLBlock } from "./blocks/ColorHSLBlock";
// import { ColorRGBBlock } from "./blocks/ColorRGBBlock";
// import { ConvertDistanceBlock } from "./blocks/ConvertDistanceBlock";
import { ConvertRangeBlock } from "./blocks/ConvertRangeBlock";
// import { CoordinatesBlock } from "./blocks/CoordinatesBlock";
// import { CountBlock } from "./blocks/CountBlock";
// import { CubeBlock } from "./blocks/CubeBlock";
// import { DimensionBlock } from "./blocks/DimensionBlock";
// import { EllipseBlock } from "./blocks/EllipseBlock";
// import { EllipsoidBlock } from "./blocks/EllipsoidBlock";
// import { EnvironmentVariablesBlock } from "./blocks/EnvironmentVariablesBlock";
// import { EventBroadcastBlock } from "./blocks/EventBroadcastBlock";
// import { EventReceiveBlock } from "./blocks/EventReceiveBlock";
// import { FlattenMatrixBlock } from "./blocks/FlattenMatrixBlock";
// import { ImageBlock } from "./blocks/ImageBlock";
import { InteractionBlock } from "./blocks/InteractionBlock";
import { IteratorBlock } from "./blocks/IteratorBlock";
import { IteratorDrawableBlock } from "./blocks/IteratorDrawableBlock";
import { IteratorVariablesBlock } from "./blocks/IteratorVariablesBlock";
// import { LineBlock } from "./blocks/LineBlock";
// import { LogicalOperatorBlock } from "./blocks/LogicalOperatorBlock";
// import { LookupIndexedBlock } from "./blocks/LookupIndexedBlock";
// import { LookupKeyedBlock } from "./blocks/LookupKeyedBlock";
// import { MacroBlock } from "./blocks/MacroBlock";
import { MacroDrawableBlock } from "./blocks/MacroDrawableBlock";
// import { MinMaxBlock } from "./blocks/MinMaxBlock";
import { NumberBlock } from "./blocks/NumberBlock";
// import { NumericComparisonBlock } from "./blocks/NumericComparisonBlock";
// import { PathBlock } from "./blocks/PathBlock";
import { PointBlock } from "./blocks/PointBlock";
import { PublishedInputsBlock } from "./blocks/PublishedInputsBlock";
// import { RandomBlock } from "./blocks/RandomBlock";
import { RectangleBlock } from "./blocks/RectangleBlock";
// import { RoundNumberBlock } from "./blocks/RoundNumberBlock";
// import { RunningTotalBlock } from "./blocks/RunningTotalBlock";
import { SampleBlock } from "./blocks/SampleBlock";
// import { SeriesBlock } from "./blocks/SeriesBlock";
// import { ScaleNumberBlock } from "./blocks/ScaleNumberBlock";
// import { ShapeBlock } from "./blocks/ShapeBlock";
// import { SmoothLineBlock } from "./blocks/SmoothLineBlock";
// import { SmoothValueBlock } from "./blocks/SmoothValueBlock";
// import { TextBlock } from "./blocks/TextBlock";
// import { TriangleBlock } from "./blocks/TriangleBlock";
// import { VariableBlock } from "./blocks/VariableBlock";
// import { VariableListBlock } from "./blocks/VariableListBlock";
// import { WaitBlock } from "./blocks/WaitBlock";

export const BlockTypes = new Map();

// BlockTypes.set( "Angle", AngleBlock );
// BlockTypes.set( "Arc", ArcBlock );
BlockTypes.set( "Arithmetic", ArithmeticBlock );
BlockTypes.set( "BinarySwitch", BinarySwitchBlock );
// BlockTypes.set( "Bounds", BoundsBlock );
// BlockTypes.set( "CastType", CastTypeBlock );
BlockTypes.set( "ColorHex", ColorHexBlock );
// BlockTypes.set( "ColorHSL", ColorHSLBlock );
// BlockTypes.set( "ColorRGB", ColorRGBBlock );
// BlockTypes.set( "ConvertDistance", ConvertDistanceBlock );
BlockTypes.set( "ConvertRange", ConvertRangeBlock );
// BlockTypes.set( "Coordinates", CoordinatesBlock );
// BlockTypes.set( "Count", CountBlock );
// BlockTypes.set( "Cube", CubeBlock );
// BlockTypes.set( "Dimension", DimensionBlock );
// BlockTypes.set( "Ellipse", EllipseBlock );
// BlockTypes.set( "Ellipsoid", EllipsoidBlock );
// BlockTypes.set( "EnvironmentVariables", EnvironmentVariablesBlock );
// BlockTypes.set( "EventBroadcast", EventBroadcastBlock );
// BlockTypes.set( "EventReceive", EventReceiveBlock );
// BlockTypes.set( "FlattenMatrix", FlattenMatrixBlock );
// BlockTypes.set( "Image", ImageBlock );
BlockTypes.set( "Interaction", InteractionBlock );
BlockTypes.set( "Iterator", IteratorBlock );
BlockTypes.set( "IteratorDrawable", IteratorDrawableBlock );
BlockTypes.set( "IteratorVariables", IteratorVariablesBlock );
// BlockTypes.set( "Line", LineBlock );
// BlockTypes.set( "LogicalOperator", LogicalOperatorBlock );
// BlockTypes.set( "LookupIndexed", LookupIndexedBlock );
// BlockTypes.set( "LookupKeyed", LookupKeyedBlock );
// BlockTypes.set( "Macro", MacroBlock );
BlockTypes.set( "MacroDrawable", MacroDrawableBlock );
// BlockTypes.set( "MinMax", MinMaxBlock );
BlockTypes.set( "Number", NumberBlock );
// BlockTypes.set( "NumericComparison", NumericComparisonBlock );
// BlockTypes.set( "Path", PathBlock );
BlockTypes.set( "Point", PointBlock );
BlockTypes.set( "PublishedInputs", PublishedInputsBlock );
// BlockTypes.set( "Random", RandomBlock );
BlockTypes.set( "Rectangle", RectangleBlock );
// BlockTypes.set( "RoundNumber", RoundNumberBlock );
// BlockTypes.set( "RunningTotal", RunningTotalBlock );
BlockTypes.set( "Sample", SampleBlock );
// BlockTypes.set( "ScaleNumber", ScaleNumberBlock );
// BlockTypes.set( "Series", SeriesBlock );
// BlockTypes.set( "Shape", ShapeBlock );
// BlockTypes.set( "SmoothLine", SmoothLineBlock );
// BlockTypes.set( "SmoothValue", SmoothValueBlock );
// BlockTypes.set( "Text", TextBlock );
// BlockTypes.set( "Triangle", TriangleBlock );
// BlockTypes.set( "Variable", VariableBlock );
// BlockTypes.set( "VariableList", VariableListBlock );
// BlockTypes.set( "Wait", WaitBlock );