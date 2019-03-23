function CitySport(sport){
    // do some stuff with the sport!
    // @TODO: make HTML

    return sport.name;
}


export default function Sport(state){
    return state
        .sports
        .map(CitySport)
        .join('');
}