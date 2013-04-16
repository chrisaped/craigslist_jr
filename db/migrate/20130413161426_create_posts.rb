class CreatePosts < ActiveRecord::Migration
  def change
  	create_table :posts do |t|
  		t.string :title
  		t.string :description
  		t.timestamps
  		t.references :category
  	end
  end
end
