import copy from 'copy-to-clipboard';
import { Accordion, AccordionContent, AccordionTrigger, Button } from 'perkslab-ui';

const AccordionExample = () => {
	return (
		<div className="flex flex-col gap-2 p-3 w-full">
			<h2 className="text-xl font-semibold">Accordion</h2>
			<Accordion>
				<AccordionTrigger>Section</AccordionTrigger>
				<AccordionContent>Section content</AccordionContent>
			</Accordion>

			<Button
				type="outline"
				className="px-2 py-1"
				onClick={() =>
					copy(
						`<Accordion>\n\t<AccordionTrigger>Section</AccordionTrigger>\n\t<AccordionContent>Section content</AccordionContent>\n</Accordion>`
					)
				}>
				Copy JSX
			</Button>
		</div>
	);
};
export default AccordionExample;
