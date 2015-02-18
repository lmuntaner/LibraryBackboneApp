# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  author      :string(255)
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Book < ActiveRecord::Base
  validates :title, presence: true
end
