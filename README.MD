# React Native ws-ui-components 🎯

Componetes React Native para Android

## Characteristics 🗳️

🚀 Project imperativo </br>
📦 Muito leve (~xxx kB) </br>
⌨️ Compatível com android </br>
🎨 Layouts personalizáveis </br>
🔧 Configuração flexível </br>

## Documentation 📋

WS_Ui_Component is an open-source mobile framework for developing interface and front-end components for applications, using ReactNative, TypeScript and JavaScript, improving the user experience in a friendly and responsive app.

## Contributors 👩‍💻

This project is being maintained by a small developer, and any help with issues and pull requests is always appreciated. If you can and want to contribute, contact us by whats (xx) xxxx-xxxx

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:

- [Git](https://git-scm.com)
- [Node.js 14+](https://nodejs.org/en/)
- [Java](https://www.java.com/pt-BR/download/manual.jsp)

## Compatibilities

Compatible with react-native >= 0.64.3

## Installation 🛠️

```
 yarn add ws-ui-components
 or
 npm i ws-ui-components
```

## Clone Project 🪞

```# Clone this repository
$ git clone https://github.com/expfig/ws-ui-components.git

# Access the project folder cmd/terminal
$ cd ws-ui-components

# Install the dependencies
$ yarn install

```

## Before running the project on your storybook machine

```
  Alterar no arquivo package a prop *main* de *index.ts*
  altere para *dist/cjs/index.js*
```

## Using Components 🎇

```

  <TextNativeWs
    text="Simple Text"
    align="center"
    size={18}
    color="#FFFFFF"
    fontWeight="100"
  />

  <InputWs
    name="password"
    height={50}
    textLabel="Informe sua senha"
    textAlign="left"
    color="#FFFFFF"
    colorTextLabel="#FFFFFF"
    fontSize={16}
    fontWeight="500"
    right={0}
    borderColor="#CDCDCD"
    borderRadius={4}
    borderWidth={1}
    heightWrapperIcon={50}
    icon
    leftIconJsx={<SvgLockKey color="#FFFFFF" size={24}/>}
    rightIconPasswordJsx={<SvgIconEye color="#FFFFFF" size={24}/>}
    placeholder="*********"
    placeholderTextColor="#6C757D"
    paddingLeft={64}
    secureTextEntry={true}
    visiblityPassword={true}
  />

  <CheckBoxWs
    onPress={() => {}}
    width={80}
    height={40}
    textLabel="Label"
    colorTextLabel="light"
    textSizeLabel={17}
    backgroundColorCheck="#056CF2"
  />

  <CreditCardWs
    icon
    back={false}
    data={{
      cvv: '098',
      name: 'Weverson Luan De Sousa',
      number: '4455787898754321',
      validate: '08/2029'
    }}
  />
```

&nbsp;

<!--- Describe the project license --->

## ©️ License

This project is under the license [MIT](./LICENSE).

Made by [Weverson Luan De Sousa](https://www.linkedin.com/in/weverson-luan-de-sousa-1969a81b0/)
