const distanceFromHqInBlocks=(someValue)=>{
    let street1=42;
    return (Math.abs(someValue-street1))
}
const distanceFromHqInFeet=(someValue)=>{
    let street2=42;
    return (Math.abs(someValue-street2)*264);
}
const distanceTravelledInFeet=(start,finish)=>{
    return (Math.abs(start-finish)*264);
}
const calculatesFarePrice=(start,destination)=>{
    let travel = (Math.abs(destination-start) * 264)
    if (travel <= 400) {
        return 0;}
         else if (travel>400 && travel<2000) {
        return (travel-400)*0.02;}
         else if (travel>2000 && travel<2500){
        return 25}
         else if (travel>2500) {
        return "cannot travel that far"}
}