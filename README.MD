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
      height={50}
      textLabel='Nome'
      textAlign='left'
      colorTextLabel="#6c757d"
      fontSize={18}
      fontWeight='500'
      placeholder='Informe seu nome'
      borderWidth={1}
      borderColor='#cdcdcd'
      borderRadius={4}
      paddingLeft={16}
      marginTop={4}
      placeholderTextColor={"#cdcdcd"}
      rightIconJsx={<User size={24} color="#6c757d"/> }
      onPressVissiblePassword={() => {}}
    />

    <CheckBoxWs
      isChecked={true}
      backgroundColorCheck="#056CF2"
    />
```

&nbsp;

<!--- Describe the project license --->

## ©️ License

This project is under the license [MIT](./LICENSE).

Made by [Weverson Luan De Sousa](https://www.linkedin.com/in/weverson-luan-de-sousa-1969a81b0/)
