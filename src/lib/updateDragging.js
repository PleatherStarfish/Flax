const updateDragging = (mapObject, objectId) => {

    if (mapObject.has(objectId)) {
        console.log("test: ", mapObject);

        // Get the object {} in state keyed to the objectId
        const objectInMapValue = mapObject.get(objectId);
        const stateToUpdate = new Map([...mapObject].filter(([key]) => key === objectId))
        stateToUpdate.set(objectId, {...objectInMapValue, isDragging: true});
        const otherObjectState = new Map([...mapObject].filter(([key]) => key !== objectId));
        console.log(new Map([...otherObjectState, ...stateToUpdate]))
        return new Map([...otherObjectState, ...stateToUpdate])
    }
};

export default updateDragging;