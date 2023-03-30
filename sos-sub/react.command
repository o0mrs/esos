echo "Welcome back.\nplease enter the project name: "
read name
cd /Users/omar/Desktop/omar/web/ui
git clone https://github.com/o0mrs/react-tamplate.git
mv react-tamplate ./$name
cd $name
code .
