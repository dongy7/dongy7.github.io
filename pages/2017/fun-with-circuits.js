import Post from '../../layouts/post';
import { H2, H3 } from '../../components/post/heading';
import Code from '../../components/post/code';
import Snippet from '../../components/post/snippet';
import P from '../../components/post/paragraph';

export default () =>
  <Post>
    <P>
      This post assumes that you have a basic understanding of bitwise
      operations. I’ll also be using TypeScript in my examples because it offers
      a very nice type system to work with. If you know JavaScript, then you’ll
      be able to follow along with a basic understanding of the type system
      offered by TypeScript.
    </P>
    <Snippet>{`
const assemble = (instructions: Instruction[]): Circuit => {
  let board: Circuit = {};

  // loop over the instructions
  for (const inst of instructions) {
    let pollFunc;

    switch (inst.type) {
      case 'AND':
        pollFunc = () => {
          const opA = getVal(board, inst.srcA);
          const opB = getVal(board, inst.srcB);
          if (opA === undefined || opB === undefined) {
            return undefined;
          }

          return opA & opB;
        }
      // other cases omitted
    }
  }
}`}</Snippet>
  </Post>;
