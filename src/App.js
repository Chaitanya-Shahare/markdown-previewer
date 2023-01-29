import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { marked } from 'marked';
import Footer from './components/Footer';

function App() {

	const [text, setText] = useState("");
	const [html, setHtml] = useState("");

	const hText = (event) => {
		setText(event.target.value);
		setHtml(marked(text));
		console.log(html);
	}

return (
		<div className="App bg-black text-white min-h-screen">
			<NavBar/>

			<div className='main max-w-5xl m-auto  md:flex md:gap-2 mt-5'>
				<textarea
					onChange={hText}
					placeholder="Start typing..."
					className="input md:w-[50%] rounded-md bg-gray-900 p-3 resize-none"
				></textarea>
				<div dangerouslySetInnerHTML={{ __html: html }}
					className='output text-black result md:w-[50%] bg-white h-[70vh] rounded-md bg-gray-800'>
				</div>
			</div>
		</div>
	);
}

export default App;
