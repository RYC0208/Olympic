**국가에 따른 올림픽 메달 CRUD**

![France](https://github.com/user-attachments/assets/7568f4ae-6666-4047-b867-a672e45ebdd3)



**분리된 컴포넌트**

Main - props를 전달해주는 부모 컴포넌트 모든 함수를 가지고 있음
Form - input의 속성을 담고있는 객체와 Form에 필요한 InputField 및 Button을 자식 컴포넌트로 가지고 있음
InputField - 부모 컴포넌트인 Form에서 전달 받은 props로 input이나 label에 값을 지정하여 재사용이 가능한 컴포넌트
Button - props에 따라서 버튼의 속성을 변경시켜주는 재사용이 가능한 컴포넌트
List - contries의 상태에 따라서 list를 보여주는 컴포넌트
