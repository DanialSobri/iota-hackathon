cd move-contracts
iota move new document_tokenization
cd document_tokenization
# (edit your Move contract in sources/)
iota move build
iota client publish