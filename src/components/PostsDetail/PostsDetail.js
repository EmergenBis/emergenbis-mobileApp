import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../res/Colors';
import Storage from '../../libs/storage';

class PostsDetail extends React.Component {
  state = {
    post: {},
    isFavorite: false,
  };

  //It makes a component out of the information of the badges
  componentDidMount() {
    this.getPost();
  }

  //This makes a request on the Posts information
  getPost = () => {
    const {item} = this.props.route.params;
    this.setState({post: item}, () => {
      this.getFavorite();
    });
    this.props.navigation.setOptions({title: item.name});
  };

  //This function checks the state of the posts
  getFavorite = async () => {
    try {
      const key = `favorite-${this.state.post._id}`;
      const favoriteStr = await Storage.instance.get(key);
      if (favoriteStr != null) {
        this.setState({isFavorite: true});
      }
    } catch (err) {
      console.log('Get favorite err', err);
    }
  };

  //It changes the button depending on the posts state.
  toggleFavorite = () => {
    if (this.state.isFavorite) {
      this.removeFavorite();
    } else {
      this.addFavorite();
    }
  };

  //This function puts the badge in a favorite state.
  addFavorite = async () => {
    const post = JSON.stringify(this.state.post);
    const key = `favorite-${this.state.post._id}`;

    const stored = await Storage.instance.store(key, post);

    if (stored) {
      this.setState({isFavorite: true});
    }
  };

  //This function puts the post in a not favorite state.
  removeFavorite = async () => {
    const key = `favorite-${this.state.post._id}`;
    await Storage.instance.remove(key);
    this.setState({isFavorite: false});
  };

  render() {
    const {post, isFavorite} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Text style={styles.head}>{post.u_level}</Text>
            <Text style={styles.matter}>{post.matter}</Text>
            <Text style={styles.contentText}>{post.description}</Text>
            <Text style={styles.dateh}>Posted in:</Text>
            <Text style={styles.date}>{post.created_at}</Text>
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  cardContentTextContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 120,
    marginLeft: 0,
  },
  contentText: {
    fontSize: 14,
    color: 'rgba(0 ,0 ,0 , 0.54)',
    alignItems: 'center',
    marginTop: 80,
    marginLeft:15,
    marginRight:15
  },
  post: {
    flex: 1,
    margin: 20,
    marginTop: 45,
    width: '90%',
    height: '90%',
    backgroundColor: Colors.white,
    borderRadius: 25,
  },
  header: {
    width: '100%',
    height: '40%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  matter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.blackPearl,
    marginTop: 5,
    marginLeft: 15
  },
  dateh: {
    fontSize: 14,
    color: Colors.blackPearl,
    alignItems: 'center',
    marginTop: 50,
    marginLeft:15,
    marginRight:15
  },
  userInfo: {
    flexDirection: 'column',
    marginTop: 90,
    justifyContent: 'center',
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.blackPearl,
    marginTop: 0,
    marginLeft: 15
  },
  date: {
    fontSize: 14,
    color: 'rgba(0 ,0 ,0 , 0.54)',
    alignItems: 'center',
    marginTop: 10,
    marginLeft:15,
    marginRight:15
  },
  city: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.zircon,
  },
  data: {
    padding: 20,
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: Colors.zircon,
  },
  dataColumns: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataInfo: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 25,
    color: Colors.charade,
  },
  smallText: {
    color: Colors.zircon,
  },
});

export default PostsDetail;
