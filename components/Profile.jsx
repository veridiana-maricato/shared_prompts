import PromptCard from "./PromptCard"

const Profile = ({ name, description, data, handleEdit, handleDelete, isLoading }) => {

    const isLoadingContent = (
        <div>
            <p className="orange_gradient mt-16">Loading...</p>
        </div>
    )

    const loadedContent = (
        <section className="w-full">
            <h1 className="head_text text-left">
                <span className="blue_gradient">
                    {name} Profile
                </span>
            </h1>
            <p className="desc text-left">{description}</p>
            <div className="mt-16 prompt_layout">
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        </section>
    )

    if (isLoading) return isLoadingContent
    return loadedContent
}

export default Profile