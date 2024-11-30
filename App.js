import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Clipboard from '@react-native-clipboard/clipboard';

export default function App() {
  const [dataKaomoji, setDataKaomoji] = useState([
    '(* ^ ω ^)',
    '(´ ∀ ` *)',
    '٩(◕‿◕｡)۶',
    '☆*:.｡.o(≧▽≦)o.｡.:*☆',
    '(o^▽^o)',
    '(⌒▽⌒)☆',
    '<(￣︶￣)>',
    "。.:☆*:･'(*⌒―⌒*)))",
    'ヽ(・∀・)ﾉ',
    '(´｡• ω •｡`)',
    '(￣ω￣)	｀;:゛',
    ';｀;･(°ε° )',
    '(o･ω･o)',
    '(＠＾◡＾)',
    'ヽ(*・ω・)ﾉ',
    '(o_ _)ﾉ彡☆',
    '(^人^)',
    '(o´▽`o)',
    '(*´▽`*)',
    '｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡',
    '( ´ ω ` )',
    '(((o(*°▽°*)o)))',
    '(≧◡≦)',
    '(o´∀`o)',
    '(´• ω •`)',
    '(＾▽＾)',
    '(⌒ω⌒)',
    '∑d(°∀°d)',
    '╰(▔∀▔)╯',
    '(─‿‿─)',
    '(*^‿^*)',
    'ヽ(o^ ^o)ﾉ',
    '(✯◡✯)',
    '(◕‿◕)',
    '(*≧ω≦*)',
    '(☆▽☆)',
    '(⌒‿⌒)',
    '＼(≧▽≦)／',
    'ヽ(o＾▽＾o)ノ',
    "☆ ～('▽^人)",
    '(*°▽°*)',
    '٩(｡•́‿•̀｡)۶',
    '(✧ω✧)',
    'ヽ(*⌒▽⌒*)ﾉ',
    '(´｡• ᵕ •｡`)',
    '( ´ ▽ ` )',
    '(￣▽￣)',
    '╰(*´︶`*)╯',
    'ヽ(>∀<☆)ノ	',
    'o(≧▽≦)o',
    '(☆ω☆)',
    '(っ˘ω˘ς )',
    '＼(￣▽￣)／',
    '(*¯︶¯*)',
    '＼(＾▽＾)／',
    '٩(◕‿◕)۶',
    '(o˘◡˘o)',
    '(★ω★)/',
    '(^ヮ^)/',
    '(〃＾▽＾〃)',
    '(╯✧▽✧)╯',
    'o(>ω<)o',
    'o( ❛ᴗ❛ )o',
    '｡ﾟ(TヮT)ﾟ｡',
    '( ‾́ ◡ ‾́ )',
    '(ﾉ´ヮ`)ﾉ*: ･ﾟ',
    '(b ᵔ▽ᵔ)b',
    '(๑˃ᴗ˂)ﻭ',
    '(๑˘︶˘๑)',
    '( ˙꒳​˙ )',
    '(*꒦ິ꒳꒦ີ)',
    '°˖✧◝(⁰▿⁰)◜✧˖°',
    '(´･ᴗ･ ` )',
    '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
    '(„• ֊ •„)',
    '(.❛ ᴗ ❛.)',
    '(⁀ᗢ⁀)',
    '(￢‿￢ )',
    '(¬‿¬ )',
    '(*￣▽￣)b',
    '( ˙▿˙ )',
    '(¯▿¯)',
    '( ◕▿◕ )',
    '＼(٥⁀▽⁀ )／',
    '(„• ᴗ •„)',
    '(ᵔ◡ᵔ)',
    '( ´ ▿ ` )',
    '(๑>◡<๑)',
    '( = ⩊ = )',
    '( ´ ꒳ ` )',
    '⸜( ´ ꒳ ` )⸝',
    '⸜(⸝⸝⸝´꒳`⸝⸝⸝)⸝',
    '⸜(*ˊᗜˋ*)⸝',
    '⸜( *ˊᵕˋ* )⸝',
    '(>⩊<)',
    '(ᗒ⩊ᗕ)',
    '(ᵔ⩊ᵔ)',
    '( ᵔ ⩊ ᵔ )',
    '(•⩊•)',
    '( • ⩊ • )',
  ]);

  const copyToClipboard = item => {
    Clipboard.setString(item);
    ToastAndroid.show(item + ' Berhasil disalin', ToastAndroid.SHORT);
  };
  return (
    <View style={{backgroundColor: '#1b0f24', flex: 1}}>
      <StatusBar backgroundColor={'#0e0813'} barStyle={'white'} />
      <View
        style={{
          backgroundColor: '#0e0813',
          color: 'white',
          paddingVertical: 10,
          fontSize: 20,
          flexDirection: 'row',
          paddingLeft: 15,
          elevation: 5,
        }}>
        <View
          style={{
            justifyContent: 'center',
            textAlign: 'center',
            marginRight: 8,
          }}>
          <Icon name="bars" size={23} color="white" />
        </View>
        <View>
          <Text
            style={{
              fontWeight: '600',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
            }}>
            Kaomoji
          </Text>
        </View>
      </View>
      <FlatList
        style={{marginTop: 8}}
        data={dataKaomoji}
        renderItem={({item, index}) => (
          <View
            style={{
              backgroundColor: '#0e0813',
              marginVertical: 5,
              marginHorizontal: 10,
              paddingLeft: 20,
              paddingVertical: 10,
              borderRadius: 10,
              elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between', // Membagi antara Text dan Icon
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                paddingRight: 20,
              }}>
              {item}
            </Text>
            <TouchableOpacity
              style={{marginRight: 20}}
              onPress={() => copyToClipboard(item)}>
              <Icon name="copy" size={23} color="white" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
