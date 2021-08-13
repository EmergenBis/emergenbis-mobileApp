import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../res/Colors';
import Http from '../../libs/http';
import {color} from 'react-native-reanimated';

class NewPost extends React.Component {

  state = {
    loading: false,
    post: {},
    form: {},
  };

  //It uses the put method to send any change in the badge.
  handleSubmit = async () => {
      console.log(this.state.form)
    await Http.instance.post(this.state.form);

  };

  render() {
    const {post, loading} = this.state;

    if (loading == true) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator
            styles={styles.loader}
            color="#043FF0D"
            size="large"
          />
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.inputText}>Urgency level</Text>
            <TextInput
              style={styles.input}
              placeholder={'Urgency level'}
              onChangeText={text => {
                this.setState(prevState => {
                  let form = Object.assign({}, prevState.form);
                  form.u_level = text;
                  return {form};
                });
              }}
            />
            <Text style={styles.inputText}>Matter</Text>
            <TextInput
              style={styles.input}
              placeholder={'matter'}
              onChangeText={text => {
                this.setState(prevState => {
                  let form = Object.assign({}, prevState.form);
                  form.matter = text;
                  return {form};
                });
              }}
            />
            <Text style={styles.inputText}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder={'Description'}
              onChangeText={text => {
                this.setState(prevState => {
                  let form = Object.assign({}, prevState.form);
                  form.description = text;
                  return {form};
                });
              }}
            />
            <Text style={styles.inputText}>Post date</Text>
            <TextInput
              style={styles.input}
              placeholder={'Post date'}
              onChangeText={text => {
                this.setState(prevState => {
                  let form = Object.assign({}, prevState.form);
                  form.created_at = text;
                  return {form};
                });
              }}
            />
            <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
              <Text style={styles.submitText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  horizontal: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    margin: 20,
    marginTop: 45,
    width: '90%',
    height: 'auto',
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
  form: {
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 75,
    borderWidth: 3,
    borderColor: Colors.white,
    position: 'absolute',
    top: 25,
    left: '28%',
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#133465',
  },
  inputText: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  submit: {
    marginVertical: 35,
    width: '35%',
    borderWidth: 1,
    borderColor: Colors.zircon,
    borderRadius: 5,
    backgroundColor: '#133465',
  },
  submitText: {
    fontSize: 16,
    marginHorizontal: 15,
    marginVertical: 10,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default NewPost;
