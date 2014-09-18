# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :level do
    number 1
    data_sound "MyString"
    data_processing "MyString"
    description "MyText"
  end
end
