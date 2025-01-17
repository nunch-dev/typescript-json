import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_dynamic_composite = _test_stringify(
    "dynamic composite",
    DynamicComposite.generate,
    TSON.createStringify<DynamicComposite>(),
);
