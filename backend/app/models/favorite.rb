class Favorite < ApplicationRecord
    validates :username, presence: true
    validates :room_id, presence: true

    # Asociaciones
    belongs_to :room, foreign_key: 'room_id'
end
