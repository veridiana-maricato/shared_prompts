"use client"
import { useEffect, useState } from "react"
import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {

    return (
        <div className="mt-4 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [filteredPosts, setFilteredPosts] = useState([])
    const [posts, setPosts] = useState([])
    const [isShowingAll, setIsShowingAll] = useState(true)

    const fetchPosts = async () => {
        const res = await fetch('/api/prompt')
        const data = await res.json()
        setPosts(data)
    }

    useEffect(() => {
        fetchPosts()
        setFilteredPosts(posts)
        setIsShowingAll(true)
    }, [])

    // handle filter
    const handleSearchChange = async (e) => {
        setSearchText(e.target.value)
        if (e.target.value === "") {
            setIsShowingAll(true)
        } else {
            setIsShowingAll(false)
        }
    }

    useEffect(() => {
        const filteredResult = posts.filter(post => {
            return post.prompt.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredPosts(filteredResult)
    }, [searchText])

    // handle tag click
    const filterByTag = (e) => {
        const filteredResult = posts.filter(post => {
            return post.tag.includes(e)
        })
        setFilteredPosts(filteredResult)
        setIsShowingAll(false)
    }

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for tag or username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>
            <button
                className={`mt-4 orange_btn ${isShowingAll ? 'hidden' : 'block'}`}
                onClick={() => {
                    setFilteredPosts(posts)
                    setIsShowingAll(true)
                }}
            >Show all posts</button>
            <PromptCardList
                data={filteredPosts}
                handleTagClick={filterByTag}
            />
        </section>
    )
}

export default Feed


