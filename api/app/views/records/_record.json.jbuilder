json.extract! record, :id, :title, :created_at, :updated_at
json.url record_url(record, format: :json)