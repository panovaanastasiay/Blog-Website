const blogSearch = document.querySelector('#blogSearch');
blogSearch.addEventListener('keyup', filterPosts);

function filterPosts() {
    let filterValue = blogSearch.value.toLowerCase();
    const posts = document.querySelectorAll('.news-item').forEach(post => {
      post.innerText.toLowerCase().indexOf(filterValue) > -1 
      ? post.style.display = '' 
      : post.style.display = 'none';
    });
}

const tags = document.querySelectorAll('.tag-aside');

tags.forEach(tag => {
    tag.addEventListener('click', filterByTag);
});

function filterByTag(e) {
    e.preventDefault();  
    
    let filterTagValue = this.querySelector('a').innerText.toLowerCase();  

    const posts = document.querySelectorAll('.news-item');
    posts.forEach(post => {
        post.innerText.toLowerCase().indexOf(filterTagValue) > -1 
        ? post.style.display = '' 
        : post.style.display = 'none';
    });
}

const themes = document.querySelectorAll('.theme-item');

themes.forEach(theme => {
    theme.addEventListener('click', filterByTheme);
});

function filterByTheme(e) {
    e.preventDefault();  
    
    let filterThemeValue = this.querySelector('a').innerText.toLowerCase();  

    const posts = document.querySelectorAll('.news-item');
    posts.forEach(post => {
        post.innerText.toLowerCase().indexOf(filterThemeValue) > -1 
        ? post.style.display = '' 
        : post.style.display = 'none';
    });
}

