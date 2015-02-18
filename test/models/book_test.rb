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

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
