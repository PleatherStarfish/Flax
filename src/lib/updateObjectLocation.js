const updateObjectLocation = (mapObject, objectId, key, ui) => {

    // Check if Map contains the key
    if ((key === "deltaPosition") && (mapObject.has(objectId))) {
        const {x, y} = mapObject.get(objectId)["deltaPosition"];
        console.log(x, y)
        const objectInMapValue = mapObject.get(objectId);
        const stateToUpdate =  new Map([...mapObject].filter(([key]) => key === objectId))
        stateToUpdate.set(objectId, {...objectInMapValue, key: {x: x + ui.deltaX, y: y + ui.deltaY}});
        const otherObjectState = new Map([...mapObject].filter(([key]) => key !== objectId));
        return new Map([...otherObjectState, ...stateToUpdate])
    }
};


export default updateObjectLocation;