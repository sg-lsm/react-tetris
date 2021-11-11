import { useState } from "react";
import { createStage } from "../gemeHelpers";

export const useStage = () =>{
    const [stage, setStage] = useState(createStage());

    return [stage, setStage];
}