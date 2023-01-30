export const ignoreEmptyComment = () => (next) => (action) => {
    if ((action.type === 'posts/addNewComment' && action.payload.text.replaceAll(' ', '')) || action.type !== 'posts/addNewComment') {
        next(action)
    }
}

const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ '(\\?[;&a-z\\d%_.~+=-]*)?'+ '(\\#[-a-z\\d_]*)?$','i')
  return !!urlPattern.test(urlString)
}

// export const ignoreEmptyPost = () => (next) => (action) => {
//     if ((action.type === 'users/addPostUsers' && isValidUrl(action.payload.img)) || action.type !== 'users/addPostUsers') {
//         next(action)
//     }
// }

export const ignoreEmptyPostUsers = () => (next) => (action) => {
    if ((action.type === 'users/addPost' && action.payload.img.replaceAll(' ', '')) || action.type !== 'users/addPost') {
        next(action)
    }
}

export const ignoreEmptyPostPosts = () => (next) => (action) => {
    if ((action.type === 'posts/addPost' && action.payload.img.replaceAll(' ', '')) || action.type !== 'posts/addPost') {
        next(action)
    }
}


        
