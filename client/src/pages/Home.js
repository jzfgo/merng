import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

const HomePage = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>

      <Grid.Row>
        {loading ? (
          <h1>Loading posts…</h1>
        ) : (
          data.getPosts &&
          data.getPosts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: '2rem' }}>
              <Card.Group>
                <PostCard post={post}></PostCard>
              </Card.Group>
            </Grid.Column>
          ))
        )}
      </Grid.Row>

      <Grid.Row>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const FETCH_POSTS_QUERY = gql`
  query {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        body
        createdAt
        username
      }
    }
  }
`;

export default HomePage;
