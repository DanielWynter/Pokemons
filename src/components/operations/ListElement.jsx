import { memo } from "react";

//List element con memo
const listElement = memo(function listElement({ name }) {
    console.log("Render Item:", name);
    return <li>{name}</li>;
});

export default listElement;