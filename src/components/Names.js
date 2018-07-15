import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_NAMES, DELETE_NAME } from './queries';

const updateCacheWhenDelete = (cache, { data: { deleteNames } }) => {
  const { allNameses } = cache.readQuery({ query: GET_NAMES });
  cache.writeQuery({
    query: GET_NAMES,
    data: {
      allNameses: allNameses.filter(n => n.id !== deleteNames.id)
    }
  })
}
export default () => (
  <ul className="avenir list pl0 ml0 center mw5 ba b--light-silver br3">
    <Query query={GET_NAMES}>
      {({ loading, error, data: { allNameses } }) => {
        if (loading) return 'Loading'
        if (error) return <div>Error</div>
        return allNameses.map(({ name, id }) => (
          <li className="avenir ph3 pv2 bb b--light-silver" key={id}>
            {name}
            <Mutation mutation={DELETE_NAME} update={updateCacheWhenDelete} >
              {(deleteNames, attrs = {}) => (
                <span
                  className="fr red pointer"
                  onClick={e => {
                    e.preventDefault()
                    deleteNames({ variables: { id } })
                  }}>
                  {attrs.loading ? 'loading' : 'x'}
                </span>
              )}
            </Mutation>
          </li>
        ))
      }}
    </Query>
  </ul>
)
