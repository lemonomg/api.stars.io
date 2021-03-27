export function GetRandomNum(Min: number, Max: number): Number {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}