export const useBookmarks = (initial) => {

    const [bookmarks, setBookmarks] = useState(initial);

    const add = newBookmark => {
        const uniqueBookmark = [...new Set([...bookmarks, newBookmark])];
        setBookmarks(uniqueBookmarks);
    };

    return [bookmarks, add];

};