import { useQuery } from '@apollo/react-hooks';
import React, { useContext } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { AuthContext } from '../context/auth';
import { FETCH_POSTS_QUERY } from '../util/graphql';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm></PostForm>
          </Grid.Column>
        )}
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

export default HomePage;
