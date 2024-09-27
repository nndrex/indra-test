
export const translate = (toTranslateObject:Object,mapper:Map<string,string>, translatedObject:Object)=>{

    console.log(`to translate : ${toTranslateObject} , mapper : ${mapper} ,translatedObject: ${translatedObject}`);
    Object.keys(toTranslateObject).forEach(key => {
        mapper.has(key) ? translatedObject[mapper.get(key)] = toTranslateObject[key] : translatedObject[key] = toTranslateObject[key];
       
    });

    return translatedObject;
}