import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import WelcomePage from './pages/WelcomePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <WelcomePage />,
		errorElement: <ErrorPage />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />

			{/* <div className="flex flex-col gap-2 py-10">
				<h3 className="font-semibold text-2xl">Accordion</h3>
				<Accordion>
					<AccordionTrigger>Section</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<span>Hello</span>
							<span>Hello</span>
							<span>Hello</span>
							<span>Hello</span>
							<span>World</span>
							<span>World</span>
							<span>World</span>
							<span>World</span>
							<span>World</span>
						</div>
					</AccordionContent>
				</Accordion>
			</div> */}

			{/* <div className="flex flex-col gap-2 py-10">
				
				<h3 className="font-semibold text-2xl">Input</h3>
				<Label htmlFor="input">Label:</Label>
				<Input id="input" type="text" className="" placeholder="Input" />

				<Label htmlFor="checkbox">
					<Checkbox id="checkbox" />
					Checkbox:
				</Label>
			</div> */}

			{/* <div className="flex flex-col gap-2 py-10">
				<h3 className="font-semibold text-2xl">Badge</h3>
				<Badge type="standard" onClick={() => console.log('Clicked!')} />
				<Badge type="primary" onClick={() => console.log('Clicked!')}>
					custom text
				</Badge>
				<Badge type="neutral" onClick={() => console.log('Clicked!')} />
				<Badge type="destructive" onClick={() => console.log('Clicked!')} />
			</div> */}

			{/* <div className="flex flex-col gap-2 py-10">
				<h3 className="font-semibold text-2xl">Card</h3>
				<Card className="w-1/2">
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Card description</CardDescription>
					</CardHeader>
					<CardContent>
						<div>
							<p>Card content</p>
						</div>
					</CardContent>
					<CardFooter>
						<Button type="primary" />
					</CardFooter>
				</Card>
				<Card className="w-fit p-0">
					<CardHeader>
						<CardImageContainer className="border-b-2 border-zinc-950">
							<CardImage src={testPhoto} alt="Test photo" />
						</CardImageContainer>
					</CardHeader>
					<CardContent className="p-1">
						<p className="text-xl hover:underline">Perkslab</p>
					</CardContent>
					<CardFooter className="p-1">
						<Button type="secondary" className="px-2 py-1">
							follow
						</Button>
					</CardFooter>
				</Card>
			</div> */}

			{/* <div className="flex flex-col gap-2 py-10">
				<h3 className="font-semibold text-2xl">Button</h3>
				<div className="flex gap-2">
					<Button type="none" />
					<Button type="standard" />
					<Button type="neutral" />
					<Button type="ghost" />
				</div>
				<div className="flex gap-2">
					<Button type="primary" />
					<Button type="primary-outline" />
				</div>
				<div className="flex gap-2">
					<Button type="secondary" />
					<Button type="secondary-outline" />
				</div>
				<div className="flex gap-2">
					<Button type="accent" />
					<Button type="accent-outline" />
				</div>
				<div className="flex gap-2">
					<Button type="info" />
					<Button type="info-outline" />
				</div>
				<div className="flex gap-2">
					<Button type="warning" />
					<Button type="warning-outline" />
				</div>
				<div className="flex gap-2">
					<Button type="success" />
					<Button type="success-outline" />
				</div>
				<div className="flex gap-2">
					<Button type="error" onClick={() => console.log('error btn!')} />
					<Button type="error-outline" />
				</div>
			</div> */}
		</>
	);
}

export default App;
