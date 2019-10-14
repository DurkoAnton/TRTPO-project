# Требования к проекту

# Содержание
1 [Введение](#intro)  
1.1 [Назначение](#appointment)  
1.2 [Бизнес-требования](#business_requirements)  
1.2.1 [Исходные данные](#initial_data)  
1.2.2 [Возможности бизнеса](#business_opportunities)  
1.2.3 [Границы проекта](#project_boundary)  
1.3 [Аналоги](#analogues)  
2 [Требования пользователя](#user_requirements)  
2.1 [Программные интерфейсы](#software_interfaces)  
2.2 [Интерфейс пользователя](#user_interface)  
2.3 [Характеристики пользователей](#user_specifications)  
2.3.1 [Классы пользователей](#user_classes)  
2.3.2 [Аудитория приложения](#application_audience)  
2.3.2.1 [Целевая аудитория](#target_audience)    
2.4 [Предположения и зависимости](#assumptions_and_dependencies)  
3 [Системные требования](#system_requirements)  
3.1 [Функциональные требования](#functional_requirements)  
3.1.1 [Основные функции](#main_functions)  
3.1.1.1 [Авторизация пользователя в приложении](#user_sign_in)  
3.1.1.2 [Просмотр задач](#tasks_view)  
3.1.1.3 [Добавление новых задач](#tasks_adding)  
3.1.1.4 [Редактирование задач](#tasks_editing)  
3.1.1.5 [Удаление задач](#tasks_deleting)  
3.1.1.6 [Выход авторизированного пользователя из учётной записи](#user_sign_out)  
3.1.2 [Ограничения и исключения](#restrictions_and_exclusions)  
3.2 [Нефункциональные требования](#non-functional_requirements)  
3.2.1 [Атрибуты качества](#quality_attributes)  
3.2.1.1 [Требования к удобству использования](#requirements_for_ease_of_use)  
3.2.1.2 [Требования к безопасности](#security_requirements)  
3.2.2 [Внешние интерфейсы](#external_interfaces)  
3.2.3 [Ограничения](#restrictions)  

<a name="intro"/>

# 1 Введение

<a name="appointment"/>

## 1.1 Назначение
В этом документе описаны функциональные и нефункциональные требования к мобильному приложению «Todol», предназначенного для создания, просмотра и редактирования списка дел. Этот документ предназначен для команды, которая будет реализовывать и проверять корректность работы приложения. 

<a name="business_requirements"/>

## 1.2 Бизнес-требования

<a name="initial_data"/>

### 1.2.1 Исходные данные

<a name="business_opportunities"/>

### 1.2.2 Возможности бизнеса
Многие люди хотели бы иметь под рукой приложение, которое позволит им записывать и удобно организовывать свои дела. Подобное приложение поможет им ничего не забыть и не держать в голове лишнюю информацию. Простой и интуитивно понятный интерфейс позволит увеличить количество людей, использующих данное приложение.

<a name="project_boundary"/>

### 1.2.3 Границы проекта
Мобильное приложение «Todol» позволит авторизированным через свою почту или Google-аккаунт пользователям добавлять задачи, а также редактировать, помечать как важные, отмечать уже выполненные и удалять их.

<a name="analogues"/>

## 1.3 Аналоги
Обзор аналогов представлен в документе [Overview of analogues](../Requirements/Overview%20of%20analogues.md)

<a name="user_requirements"/>

# 2 Требования пользователя

<a name="software_interfaces"/>

## 2.1 Программные интерфейсы
 

<a name="user_interface"/>

## 2.2 Интерфейс пользователя
Окно входа в приложение для неавторизированного пользователя.  
![Окно входа в приложение](../../Images/Mockups/WelcomePage.JPG)  
Главное окно приложения (пользователь авторизирован).  
![Главное окно приложения 1](../../Images/Mockups/App1.JPG)
![Главное окно приложения 2](../../Images/Mockups/App2.JPG)  
Главное окно приложения при добавлении новой задачи.  
![Главное окно приложения при добавлении новой задачи](../../Images/Mockups/TaskAdding.JPG)

<a name="user_specifications"/>

## 2.3 Характеристики пользователей

<a name="user_classes"/>

### 2.3.1 Классы пользователей
| Класс пользователей | Описание |
|:---|:---|
| Анонимные пользователи | Пользователи, которые не хотят регистрироваться в приложении. Не имеют доступ к функционалу приложения. |
| Зарегистрированные пользователи | Пользователи, которые авторизировались в приложении через email или Google-аккаунт. Имеют доступ к полному функционалу |

<a name="application_audience"/>

### 2.3.2 Аудитория приложения

<a name="target_audience"/>

#### 2.3.2.1 Целевая аудитория
Люди любой возрастной категории, обладающие минимальными навыками работы с мобильными приложениями.

<a name="assumptions_and_dependencies"/>

## 2.4 Предположения и зависимости
1. Приложение не работает при отсутствии подключения к Интернету;
2. Приложение не работает, если пользователь отклонил запросы доступа приложения.

<a name="system_requirements"/>

# 3 Системные требования

<a name="functional_requirements"/>

## 3.1 Функциональные требования

<a name="main_functions"/>

### 3.1.1 Основные функции

<a name="user_sign_in"/>

#### 3.1.1.1 Авторизация пользователя в приложении
Пользователь имеет возможность авторизации через email или Google-аккаунт.

<a name="tasks_view"/>

#### 3.1.1.2 Просмотр задач
Пользователь имеет возможность просмотра созданных ранее задач. Есть возможность отображения задач только со статусом "важно".

<a name="tasks_adding"/>

#### 3.1.1.3 Добавление новых задач
Пользователь имеет возможность добавлять новую задачу.

<a name="tasks_editing"/>

#### 3.1.1.4 Редактирование задач
Пользователь имеет возможность отредактировать созданную ранее задачу. Редактировать можно содержание задачи, а также её статус.

<a name="tasks_deleting"/>

#### 3.1.1.5 Удаление задач
Пользователь имеет возможность удалить задачу, независимо от её статуса. Также имеется возможность удаления всех выполненных задач.

<a name="user_sign_out"/>

#### 3.1.1.6 Выход авторизированного пользователя из учётной записи
Пользователь имеет возможность выхода из своего аккаунта.

<a name="restrictions_and_exclusions"/>

### 3.1.2 Ограничения и исключения
1. Приложение работает только при наличии подключения к Интернету;
2. Авторизация пользователя возможна, если он заранее зарегестрировал Google-аккаунт или электронную почту. 

<a name="non-functional_requirements"/>

## 3.2 Нефункциональные требования

<a name="quality_attributes"/>

### 3.2.1 Атрибуты качества

<a name="requirements_for_ease_of_use"/>

#### 3.2.1.1 Требования к удобству использования
1. В приложении небольшое количество функциональных элементов, которые имеют иконки и короткие названия, описывающие их назначение;
2. Данные с разных устройств синхронизируются.

<a name="security_requirements"/>

#### 3.2.1.2 Требования к безопасности
Приложение предоставляет возможность просмотра и редактирования профиля только после авторизации пользователя.

<a name="external_interfaces"/>

### 3.2.2 Внешние интерфейсы

<a name="restrictions"/>

### 3.2.3 Ограничения