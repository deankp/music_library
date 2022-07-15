import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
<<<<<<< HEAD
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { Fragment } from 'react'

function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])

	const API_URL = 'https://itunes.apple.com/search?term='

	useEffect(() => {
		if(search) {
			const fetchData = async () => {
				document.title = `${search} Music`
				const response = await fetch(API_URL + search)
				const resData = await response.json()
				if (resData.results.length > 0) {
					return setData(resData.results)
				} else {
					return setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [search])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}

	return (
		<div>
			{message}
			<Router>
				<Routes>
					<Route path="/" element={
						<Fragment>
							<SearchBar handleSearch = {handleSearch}/>
							<Gallery data={data} />
						</Fragment>
					} />
					<Route path="/album/:id" element={<AlbumView />} />
					<Route path="/artist/:id" element={<ArtistView />} />
				</Routes>
			</Router>
		</div>
  	);
}

export default App;
=======
import Spinner from './components/spinner'
import { createResource as fetchData } from './helper'


  const App = () => {
        let [searchTerm, setSearch] = useState('')
        let [message, setMessage] = useState('Search for Music!')
        let [data, setData] = useState(null)
    
        const API_URL = 'https://itunes.apple.com/search?term='
    
        useEffect(() => {
			if (searchTerm) {
				setData(fetchData(searchTerm))
			}
		}, [searchTerm])
		
    
        const handleSearch = (e, term) => {
            e.preventDefault()
            setSearch(term)
        }

		const renderGallery = () => {
			if(data){
				return (
					<Suspense fallback={<Spinner />}>
						<Gallery data={data} />
					</Suspense>
				)
			}
		}
    
        return (
			<div className="App">
				<SearchBar handleSearch={handleSearch} />
				{message}
				{renderGallery()}
			</div>
		)		
    }
    
    export default App
>>>>>>> with_suspense
