export const convertToStr = (value) =>{
    if(Array.isArray(value)){
        return value[0];
    }
    return value;
}
