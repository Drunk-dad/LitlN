# filename: createComponent.sh
echo "What's your component name?"
read name
cd src/components/
mkdir $name
cd $name/
#создание самого компоента
echo -e "export { default } from './$name'" > index.js
#создание файла стилей
echo "" > $name.module.css
#создание файла разметки
echo -e "import s from './$name.module.css'\n\nconst $name = () => {\n  return\n}\nexport default $name" > $name.jsx
