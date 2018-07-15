import React from 'react';
import { Query } from 'react-apollo';
import { GET_LINKS } from './queries';

const Image = () => (
  <Query query={GET_LINKS}>
    {({ loading, error, data: { allLinks } }) => {
      if (loading) return "loading ....";
      if (error) return "error!";
      return allLinks.map(link => (
        <article class="bg-white center mw5 ba b--black-10 mv4 avenir">
          <div class="pv2 ph3">
            <h1 class="f6 ttu tracked">{link.meta.title}</h1>
          </div>
          <img src={link.meta.image} class="w-100 db" alt={link.meta.title} />
          <div class="pa3">
            <a href={link.url} target="_blank" class="link dim lh-title">
              See Awesome Webpack things
            </a>
            <small class="gray db pv2">
              Category: <time>{link.type}</time>
            </small>
          </div>
        </article>
      ))
    }}
  </Query>
);

export default Image;