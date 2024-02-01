import { CopyBlock } from 'react-code-blocks';

const Instruction = () => {
	return (
		<div className="flex flex-col gap-2 p-3 w-full">
			<h2 className="text-xl font-semibold">Instruction</h2>
			<CopyBlock text={'npm i perkslab-ui@latest'} language={'javascript'} showLineNumbers={false} codeBlock />
		</div>
	);
};
export default Instruction;
