import matter from 'gray-matter';
import glob from 'glob';
import config from './globals';

export const loadMarkdownFile = async (filePath) => {
  const mdFile = await import(`./md/${filePath}`);
  return { path: filePath, contents: mdFile.default }
}


export const mdToPost = (file) => {
  const metaData = matter(file.contents);
  const path = file.path.replace('.md', '');
  const post = {
    path,
    title: metadata.data.title,
    subtitle: metadata.data.subtitle || null,
    published: metadata.data.published || false,
    datePublished: metadata.data.datePublished || null,
    tags: metadata.data.tags || null,
    description: metadata.data.description || null,
    canonicalUrl: metadata.data.canonicalUrl || `${config.url}/${path}`,
    author: metadata.data.author || null,
    authorPhoto: metadata.data.authorPhoto || null,
    authorTwitter: metadata.data.authorTwitter || null,
    bannerPhoto: metadata.data.bannerPhoto || null,
    thumbnailPhoto: metadata.data.thumbnailPhoto || null,
    content: metadata.content,
  };

  if (!post.title) throw new Error(`Missing: title.`);
  if (!post.content) throw new Error(`Missing: content.`);

  return post;
}

export const loadMarkdownFiles = async path => {
  const blogPaths = glob.sync(`./md/${path}`);
  return await Promise.all(
    blogPaths.map((blogPath) => {
      const modPath = blogPath.slice(blogPath.indexOf(`md/`) + 3);
      return loadMarkdownFile(`${modPath}`);
    })
  )
}

export const loadPost = async path => {
  const file = await loadMarkdownFile(path);
  return mdToPost(file);
}

export const loadBlogPosts = async () => {
  return await (await loadMarkdownFiles(`blog/*.md`)).map(mdToPost);
}