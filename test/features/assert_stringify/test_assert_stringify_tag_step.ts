import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_tag_step = _test_assert_stringify(
    "step tag",
    TagStep.generate,
    (input) => TSON.assertStringify(input),
    TagStep.SPOILERS,
);
